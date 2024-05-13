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
docker run -p "4000:4000" -e JEKYLL_ENV=development --rm --volume="$PWD:/srv/jekyll" docker.gbif.org/fast-jekyll:4.1.0 jekyll serve --port 4000 --host 0.0.0.0
```

Annoyingly, this seems to not respond to ctrl-c requests, so you'll have to kill it.

