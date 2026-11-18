[![GBIF Hosted Portal](https://docs.gbif.org/style/gbif-hosted-portal.svg)](https://github.com/gbif/hosted-portals)
[![Build Status](https://builds.gbif.org/job/hp-uk-collections/badge/icon)](https://builds.gbif.org/job/hp-uk-collections/lastBuild/console)
<!-- License badge example: [![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY%2D-SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/) -->

# GBIF Hosted Portal: hp-uk-collections

This Jekyll website, **[hp-uk-collections](https://uk-collections.hp.gbif.org/)**, makes use of a theme and biodiversity widgets developed by the GBIF network.

You can find information on editing this site and more on [gbif/hosted-portals](https://github.com/gbif/hosted-portals)

Staging site: https://uk-collections.hp.gbif-staging.org/ 

> Powered by [GBIF](https://www.gbif.org/)

## Running locally

You can run the site locally for more involved dev work using the following from the root of your repo checkout:

```bash
docker run -it -p "4000:4000" -e JEKYLL_ENV=development --rm --volume="$PWD:/srv/jekyll" docker.gbif.org/fast-jekyll:4.1.0 jekyll serve --port 4000 --host 0.0.0.0
```

Press Ctrl-C to stop it. The `-it` flag is what makes Ctrl-C work: without it, the signal only reaches the image's bash wrapper script (running as PID 1), which ignores it, so Jekyll never stops. If you run the command without a terminal (e.g. in a script or CI), `-t` will fail; use `--init -e TINI_KILL_PROCESS_GROUP=1` in place of `-it` instead.

