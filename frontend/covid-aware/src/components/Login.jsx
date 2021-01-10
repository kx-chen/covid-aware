import Typography from "@material-ui/core/Typography";
import GoogleButton from 'react-google-button'
import firebase from 'firebase';
import {
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd
} from "@react-firebase/auth";



export default (props) => {
    return (
            <div>
                <Typography variant="h3" gutterBottom>
                    Login
                </Typography>
                <GoogleButton
                    onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                />
                <button
                    onClick={() => {
                        firebase.auth().signOut();
                    }}
                >
                    Sign Out
                </button>
                <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                        return (
                            <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
                        );
                    }}
                </FirebaseAuthConsumer>
                <div>
                    <IfFirebaseAuthed>
                        {() => {
                            return <div>You are authenticated</div>;
                        }}
                    </IfFirebaseAuthed>
                    <IfFirebaseAuthedAnd
                        filter={({ providerId }) => providerId !== "anonymous"}
                    >
                        {({ providerId }) => {
                            return <div>You are authenticated with {providerId}</div>;
                        }}
                    </IfFirebaseAuthedAnd>
                </div>
            </div>
    )
}

//
// export default function Auth() {
//     return (
//         <FirebaseAuthProvider {...config} firebase={firebase}>
//             <div>
//                 <button
//                     onClick={() => {
//                         const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//                         firebase.auth().signInWithPopup(googleAuthProvider);
//                     }}
//                 >
//                     Sign In with Google
//                 </button>
//                 <button
//                     onClick={() => {
//                         firebase.auth().signOut();
//                     }}
//                 >
//                     Sign Out
//                 </button>
//                 <FirebaseAuthConsumer>
//                     {({ isSignedIn, user, providerId }) => {
//                         return (
//                             <pre style={{ height: 300, overflow: "auto" }}>
//                 {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
//               </pre>
//                         );
//                     }}
//                 </FirebaseAuthConsumer>
//                 <div>
//                     <IfFirebaseAuthed>
//                         {() => {
//                             return <div>You are authenticated</div>;
//                         }}
//                     </IfFirebaseAuthed>
//                     <IfFirebaseAuthedAnd
//                         filter={({ providerId }) => providerId !== "anonymous"}
//                     >
//                         {({ providerId }) => {
//                             return <div>You are authenticated with {providerId}</div>;
//                         }}
//                     </IfFirebaseAuthedAnd>
//                 </div>
//             </div>
//         </FirebaseAuthProvider>
//     );
// };
//
