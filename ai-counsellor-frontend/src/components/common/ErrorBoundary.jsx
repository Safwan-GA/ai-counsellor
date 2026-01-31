import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    window.dispatchEvent(
      new CustomEvent("api-error", { detail: error.message })
    );
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
