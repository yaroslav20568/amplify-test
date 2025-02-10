import { Authenticator } from '@aws-amplify/ui-react';
import { deleteUser } from 'aws-amplify/auth';

const Auth = () => {
	async function handleDeleteUser() {
		try {
			await deleteUser();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Authenticator>
			{({ signOut, user }) => (
				<main>
					<h1>Hello {user?.signInDetails?.loginId}</h1>
					<div className="btns">
						<button onClick={signOut} className="sign-out">
							Sign out
						</button>
						<button onClick={handleDeleteUser}>Delete acc</button>
					</div>
				</main>
			)}
		</Authenticator>
	);
};

export default Auth;
