const channel = new BroadcastChannel("auth");

export function broadcastLogout() {
  channel.postMessage({ type: "logout" });
}

export function listenForAuthChanges(onLogout: () => void) {
  channel.onmessage = (event) => {
    if (event.data?.type === "logout") {
      onLogout();
    }
  };
}