/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "../Header";
// import '../../sass/styles.scss';


export default function Layout({ children }) {
	return (
		<div
			sx={{
				display: 'flex',
				flexDirection: 'column',
				// set this to `minHeight: '100vh'` for full viewport height
				minHeight: '100vh',
			}}>
				<Header />
				<main
					sx={{
						width: '100%',
						flex: '1 1 auto',
					}}>
					{children}
				</main>

			<footer
				sx={{
					width: '100%',
				}}>
			</footer>
		</div>
	)
}