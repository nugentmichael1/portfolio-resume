### Firebase PubSub Emulator Directions

While documentation exists here:
https://cloud.google.com/functions/docs/local-development
https://cloud.google.com/pubsub/docs/emulator
it is important to understand how to format the links with the project id and appropriate port numbers.  THe project ID can be found in the Firebase console online, and the port numbers are both set in the firebase.json file, and displayed in the emulator UIs (CLI and Web).

## Initialize Topic
This step shouldn't be necessary if a function mentions a PubSub topic already.  The PubSub emulator seems to automatically create it then.
This port number should be of the PubSub emulator.
curl -s -X PUT 'http://localhost:8085/v1/projects/portfolio-688a4/topics/billing-pubsub'

## Initialize Subscription
First port number is for the PubSub emulator.  Second (endpoint) should be of the Functions emulator (where the PubSub function exists).
curl -s -X PUT 'http://localhost:8085/v1/projects/portfolio-688a4/subscriptions/billing-pubsub' -H 'Content-Type: application/json' --data '{"topic":"projects/portfolio-688a4/topics/billing-pubsub","pushConfig":{"pushEndpoint":"http://localhost:5001/projects/portfolio-688a4/topics/billing-pubsub"}}'

## Publish message(s)
Port number is PubSub emulator.  This command can be executed an unlimited number of times to simulate as many publish events as necessary.  The data values are the JSON, but are encoded in base64 with quoted keys.
curl -s -X POST 'http://localhost:8085/v1/projects/portfolio-688a4/topics/billing-pubsub:publish'  -H 'Content-Type: application/json'  --data '{"messages":[{"data":"eyJidWRnZXREaXNwbGF5TmFtZSI6IkVtdWxhdG9yIFBvcnRmb2xpbyBCaWxsaW5nIE5vdGlmaWVyIiwiY29zdEFtb3VudCI6MCwiY3VycmVuY3lDb2RlIjoiVVNEIn0="}]}'