import axios from "axios";

/**
 * Convert time string to seconds
 * @param str string in the form "HH:MM:SS" as well as "MM:SS" or "SS".
 * @returns int seconds
 */

export const timeStrToSeconds = (str) => {
	var p = str.split(':'),
		s = 0, m = 1;

	while (p.length > 0) {
		s += m * parseInt(p.pop(), 10);
		m *= 60;
	}

	return s;
}


export function sendEmail(toEmail, subject, body, options) {
	const { replyTo, toName, fromEmail } = options
	const apiKey = process.env.SENDINBLUE_API_KEY;
	const sendOpts = {
		subject,
		textContent: body,
		to: [{email: toEmail}],
		sender: {email: "noreply@bennetsilverman.com", name: 'Bennet Silverman Website'}
	}
	if (toName) {
		sendOpts.to = [{email: toEmail, name: toName}];
	}
	if (replyTo) {
		sendOpts.replyTo = {email: replyTo}
	}
	return axios.post('https://api.sendinblue.com/v3/smtp/email', sendOpts, {
		headers: {
			accept: 'application/json',
			"api-key": apiKey,
			'content-type': 'application/json'
		}
	})


}
