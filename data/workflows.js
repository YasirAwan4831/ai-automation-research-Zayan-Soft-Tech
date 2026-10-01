// Workflow diagrams. Step wording is taken from the research paper (sections 6.2, 11.3 and 19).
export const workflows = {
  general: {
    title: "Sample AI automation workflow",
    sectionHref: "/research/19-sample-ai-automation-workflow",
    intro: "A general workflow that can be adapted for many businesses. It begins when a customer sends a message and ends when records and reports are up to date. Human checkpoints can be added at any stage where judgment is needed.",
    steps: [
      ["Customer Message", "A customer writes through chat, email or social media"],
      ["AI Reads and Classifies the Inquiry", "Identifies the topic, urgency and type of request"],
      ["Information Extracted", "Name, contact details, product or service and other key points"],
      ["Customer / Lead Record Created", "The details are saved in one organized place"],
      ["Appropriate Response Generated", "A reply is prepared from approved company information"],
      ["CRM / Business System Updated", "The record, status, and conversation history are stored"],
      ["Sales or Support Team Notified if Needed", "A person is alerted for complex or high-value cases"],
      ["Follow-Up Scheduled", "A reminder or message is planned for the right time"],
      ["Report / Record Updated", "Figures and summaries reflect the new activity"],
    ],
  },
  department: {
    title: "Connecting departments: a new sales lead",
    sectionHref: "/research/6-ai-automation-for-companies",
    intro: "A new sales lead arriving through the website, passed across departments by one automated flow.",
    steps: ["Lead Arrives", "Information Captured", "Lead Categorized", "CRM Updated", "Follow-Up Task Created", "Sales Representative Notified", "Customer Receives Appropriate Communication"].map((s) => [s, ""]),
  },
  lead: {
    title: "Lead automation: the complete journey of a lead",
    sectionHref: "/research/11-automated-lead-collection-and-follow-ups",
    intro: "The journey of a lead from first inquiry to conversion. The stage table below gives the automation and human role for each stage.",
    steps: ["Customer Inquiry", "Lead Capture", "Qualification", "CRM Entry", "Notification", "Follow-Up", "Sales Conversation", "Conversion"].map((s) => [s, ""]),
  },
};
