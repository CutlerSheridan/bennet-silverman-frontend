#!/Users/glamr/.nvm/versions/node/v18.16.0/bin/node
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function videoPromise(videoUrl, start, end) {
	console.log("downloading", videoUrl, start, end)
	let startStr = start ? `-ss ${start}` : "";
	const endStr = end ? `-to ${end}` : "";

	if (startStr && endStr) {
		startStr += ' '
	}
	const { stdout, stderr } = await exec(`yt-dlp -f "(bestvideo/best)[protocol!*=dash]" --force-overwrites --external-downloader ffmpeg --external-downloader-args "ffmpeg_i:${startStr}${endStr}" "${videoUrl}"`);
	console.log('stdout:', stdout);
}

let videos = [
	// hospital soap
	["https://vimeo.com/786769342/e8290dad3f", "00:00:00", "00:00:06"],
	// directing reel
	// ["https://vimeo.com/117449043", "00:00:04", "00:00:46"],
	// // 65 promo
	// ["https://www.youtube.com/watch?v=nKalONrMaA0", "00:00:13", "00:00:23"],
	// // lineup schwimmer
	// ["https://vimeo.com/695011630/5b1f580415", "00:00:23", "00:00:33"], // vimeo error
	// // all that promos
	// ["https://vimeo.com/347348513", "00:00:04", ""],
	// // coin master john stamos
	// ["https://vimeo.com/786769235", "00:00:17", "00:00:21"],
	// // coin master nene leakes
	// ["https://vimeo.com/673367214", "00:00:23", "00:00:27"],
	// // coin master david schwimmer
	// ["https://vimeo.com/673358370", "00:00:18", "00:00:24"],
	// // pokemon go x try guys
	// ["https://www.youtube.com/watch?v=9TkjKV76PeY", "00:00:28", "00:00:45"],
	// // benzac back to school
	// ["https://youtu.be/E_LEzVjYbuw", "00:01:09", "00:01:15"],
	// // this isn't working
	// ["https://vimeo.com/356060278", "00:02:58", "00:03:10"],
	// // first kiss
	// ["https://www.youtube.com/watch?v=pI_xhnApd8Q", "00:00:05", ""],
	// // betch baby talk
	// ["https://vimeo.com/431359555", "00:00:26.5", "00:00:37"],
	// // target takes on
	// ["https://www.youtube.com/watch?v=WViemV92kPc", "00:00:05", "00:00:13"],
	// // lawyer cop md
	// ["https://youtu.be/67sZcDLe8jY", "00:00:06", "00:00:12"],
	// // revengers betch
	// ["https://vimeo.com/246897794", "00:01:18", "00:01:25"],
]

const promises = [];

// videos = [videos[0]]

for (const video of videos) {
	promises.push(videoPromise(video[0], video[1], video[2]));
}
Promise.all(promises).then(console.log)


// missing hospital soap
// missing major league
// missing minor league
// missing coin master ed o'neill
// missing secret life of pets
// missing drama club
// missing target takes on
// social network 2
// harvard sailing team

// lineup video link not working

// 65 Promo: Start at 00:13 - 00:23 (starts on first shot of basketball player swiping hand across face)
// The Lineup David Schwimmer: Start at lunging forward 00:23 - 00:33
// All That Promos: start at 00:04 and run through end
// Coin Master John Stamos: start at 00:17 (shot of standing up + zoom out) to 00:21 crying on ground
// Coin Master Nene Leakes: Start at 00:23 (asian woman taking phone out) to 00:27 (just before titles and graphics come in)
// Coin Master: David Schwimmer Lawyer 00:18 (no more!) to 00:24 thumbs up shot
// Pokemon Go x Try Guys: 00:28 (shirt ripping open) to 00:45
// Benzac Back To School Solutions: 01:09 - 01:15
// This Isn't Working: 02:58 - 03:10 
// First Kiss: start at 00:05
// Betch Baby Talk: 00:26.5 - 00:37
// Target Takes on: 00:05 - 00:13 (just after the dress jump moment)
// Lawyer Cop MD - 00:06 - 00:12
// Revengers Betch: 01:18 - 01:25