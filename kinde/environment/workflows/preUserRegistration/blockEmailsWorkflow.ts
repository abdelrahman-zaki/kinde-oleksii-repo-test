import {
  denyAccess,
  onUserPreRegistrationEvent,
  WorkflowSettings,
} from "@kinde/infrastructure";

// The settings for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "preRegistration",
  name: "Block email domains",
  failurePolicy: {
    action: "continue",
  },
  trigger: "user:pre_registration",
  bindings: {
    "kinde.env": {},
    "kinde.auth": {},
  },
};

// This workflow allows you to block users from registering with disposable email domains.
//
// In Settings -> Environment variables set up the following variable with the
// * DISPOSABLE_EMAIL_DOMAINS - A comma separated list of disposable email domains
//
// For example, if you want to block users from registering with disposable email domains like
// @yopmail.com, @guerrillamail.com, @mailinator.com, you can set the variable to:
//
// yopmail.com,guerrillamail.com,mailinator.com
//
// You could also hardcode the disposable email domains in the workflow code, but this is not recommended
// as it makes it harder to manage and update the list of disposable email domains.

const disposableEmailDomains = "gmail.com";

export default async function handlePreRegistration(
  event: onUserPreRegistrationEvent
) {
  console.log(JSON.stringify(event));
  // const disposableEmailDomains = getEnvironmentVariable(
  //   "DISPOSABLE_EMAIL_DOMAINS"
  // )?.value;
  // disposableEmailDomains
//   const disposableEmailDomainsArray = disposableEmailDomains?.split(",");

//   if (
//     disposableEmailDomainsArray?.includes(
//       event.context.user.email.split("@")[1]
//     )
//   ) {
//     denyAccess("Disposable email domain detected");
//     console.log("Disposable email domain detected");
//   }
// }

// The workflow code to be executed when the event is triggered
// export default async function Workflow(event: any) {
//   const disposableEmailDomainsArray = ["jioso.com"];
//   //   const disposableEmailDomains = kinde.env.getEnvironmentVariable(
//   //     "BLOCKED_EMAIL_DOMAINS"
//   //   )?.value;
//   console.log(event);
//   console.log(disposableEmailDomainsArray);
//   // const disposableEmailDomainsArray = disposableEmailDomains?.split(",");

//   if (
//     disposableEmailDomainsArray?.includes(
//       event.context.user.email.split("@")[1]
//     )
//   ) {
//     kinde.auth.denyAccess("Blocked email domain detected");
//   }
// }
