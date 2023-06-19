/**
 * This is a simple "Hello World" example for AI.JSX, a library for building
 * AI-powered applications using JavaScript and JSX. For more details, check out:
 *   https://ai-jsx.com/
 *
 * Run this example with:
 *   $ export OPENAI_API_KEY=<Your OpenAI API key>
 *   $ npm install
 *   $ npm start
 */

import * as AI from "ai-jsx";
import { ChatCompletion, UserMessage } from "ai-jsx/core/completion";

function App() {
  return (
    <ChatCompletion>
      <UserMessage>
        Generate a Shakespearean sonnet about large language models.
      </UserMessage>
    </ChatCompletion>
  );
}

const renderContext = AI.createRenderContext();
const response = await renderContext.render(<App />);
console.log(response);
