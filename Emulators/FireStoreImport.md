# Export Firestore data for Emulator import

This can be accomplished through a set of commands in terminal on the existing project:

1. Login to firebase and Gcloud:

firebase login
gcloud auth login

2. See a list of your projects and connect to one:

firebase projects:list
firebase use your-project-name

gcloud projects list
gcloud config set project your-project-name

3. Export your production data to gcloud bucket with chosen name:

gcloud firestore export gs://your-project-name.appspot.com/your-choosen-folder-name

4. Now copy this folder to your local machine, I do that in functions folder directly:

Note : Don't miss the dot ( . ) at the end of below command

cd functions
gsutil -m cp -r gs://your-project-name.appspot.com/your-choosen-folder-name .

5. Now we just want to import this folder. This should work with the basic command, thanks to latest update from Firebase team https://github.com/firebase/firebase-tools/pull/2519.

firebase emulators:start --import ./your-choosen-folder-name

Check out my article on Medium about it and a shorthanded script to do the job for you https://medium.com/firebase-developers/how-to-import-production-data-from-cloud-firestore-to-the-local-emulator-e82ae1c6ed8

Note: Its better to use a different bucket for it, as copying into your project bucket will result in the folder created in your firebase storage.
If you are interested in gsutil arguments like -m, you can see them described by executing gsutil --help.



https://stackoverflow.com/questions/57838764/how-to-import-data-from-cloud-firestore-to-the-local-emulator