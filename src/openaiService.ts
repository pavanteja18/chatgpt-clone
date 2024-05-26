import OpenAI, {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponseChoicesInner,
} from "openai";

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: import.meta.env.REACT_APP_OPENAI_API_KEY,
});

async function main() {
  try {
    // Define the messages
    const messages: ChatCompletionRequestMessage[] = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Who won the world series in 2020?" },
      {
        role: "assistant",
        content: "The Los Angeles Dodgers won the World Series in 2020.",
      },
      { role: "user", content: "Where was it played?" },
    ];

    // Create the chat completion
    const completion = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });

    // Type guard to ensure choices are defined
    if (completion.choices && completion.choices.length > 0) {
      const choice: CreateChatCompletionResponseChoicesInner =
        completion.choices[0];
      console.log(choice);
    } else {
      console.log("No choices returned from OpenAI API.");
    }
  } catch (error) {
    console.error("Error creating completion:", error);
  }
}

main();
