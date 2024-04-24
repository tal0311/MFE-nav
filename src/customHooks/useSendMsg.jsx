// by convention, composable function names start with "use"
export function UseSendMsg(type, payload) {
    // send message to parent window
    window.parent.postMessage(
      { type, payload: JSON.parse(JSON.stringify(payload)) },
      import.meta.env.VITE_MAIN_CONTAINER_URL
    )
  }
  