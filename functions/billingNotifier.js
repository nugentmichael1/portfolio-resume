//Firebase billing notifier


// -- Dependencies --

//debug tool for base64 decode of Google's pubsub messages
const util = require('util');

//Sends messages to a slack channel as a bot based on a supplied url
const { IncomingWebhook } = require('@slack/webhook');


async function receiveBillingNotice(message) {

    //debug
    // console.log("Inside 'recieveBillingNotice function'")
    // console.log(message);

    //these messages are base64 encoded
    const data = message.json;

    //Can be seen in firebase console's function logs
    console.log(`Here is your pubsub data: ${util.inspect(data)}`);

    return handlePubSub(data);
}

async function handlePubSub(pubSubData) {


    const billingMessage = createBillingMessage(pubSubData)

    let caseMessage;

    //Logic
    //1. Decide whether to notify Slack channel.  Three cases: Two possible reasons to notify Slack channel: (1) Bill has become greater than 0, and (2) first of the month; and (3rd case / default) neither of these conditions are satisfied, which means there is no need to notify a Slack channel.

    //Snapshot current date and time
    const now = new Date()
    console.log(now)

    //Case 1
    if (pubSubData.costAmount > 0) {
        caseMessage = 'Warning:  ';
    }
    //Case 2
    //Determine whether date and time are first of month at 0 (midnight) hour.
    else if (now.getDate() === 1 && now.getHours() === 0) {
        caseMessage = "Monthly notice that Portfolio billing notifier is still online.\n";
    }
    //Case 3
    else return;

    //combine case message and billing message into one string for code-readability purposes
    const completeMessage = caseMessage + billingMessage;

    //log to console
    console.log(completeMessage)

    //notify Slack app
    await slackWebHook(completeMessage)
}

//Create message to send based on budget properties
function createBillingMessage(pubSubData) {
    return `${pubSubData.budgetDisplayName} has incurred a total cost of \$${pubSubData.costAmount} ${pubSubData.currencyCode}`
}

//Send message to Slack channel
async function slackWebHook(message) {

    //Load url from environment variables
    const url = process.env.SLACK_WEBHOOK_URL;

    //initialize Slack webhook
    const webhook = new IncomingWebhook(url);

    //Send message to slack channel
    await webhook.send({ text: message })
}

//Export
exports.receive = receiveBillingNotice;