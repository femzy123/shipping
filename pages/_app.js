import "../styles/globals.css";
import { SubjectSharp } from "@material-ui/icons";
import { AuthProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
