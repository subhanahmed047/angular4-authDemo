// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCFmkF96R3QoKrOT3pqsRy6nh868s4UNFc",
    authDomain: "angular4-authdemo.firebaseapp.com",
    databaseURL: "https://angular4-authdemo.firebaseio.com",
    projectId: "angular4-authdemo",
    storageBucket: "",
    messagingSenderId: "300040582547"
  }
};
