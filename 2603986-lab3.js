function getMusicTitlesByYear(tracks) {
    const orderedTracks = {};

    if (!Array.isArray(tracks)) {
        return orderedTracks;
    }

    tracks.forEach(track => {
        if (track && typeof track === 'object' && !Array.isArray(track)) {
            const { title, artist, year } = track;

            if (
                typeof title === 'string' &&
                typeof artist === 'string' &&
                typeof year === 'number' &&
                Number.isInteger(year)
            ) {
                orderedTracks[year] = orderedTracks[year] || [];
                orderedTracks[year].push(title);
            }
        }
    });

    for (const year in orderedTracks) {
        orderedTracks[year].sort();
    }

    return orderedTracks;
}

module.exports = { getMusicTitlesByYear };