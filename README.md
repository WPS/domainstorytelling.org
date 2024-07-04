# domainstorytelling.org

The website for Domain Storytelling [![CC BY 4.0][cc-by-shield]][cc-by]

## Development

### Setup environment

Install Docker Desktop on Windows:

```pwsh
\$ winget install -e --id Docker.DockerDesktop
```

Install Docker Desktop on macOS:

```fish
\$ brew install --cask docker
```

### Day-to-day Development

To run a server locally:

```fish
\$ docker compose up
```

### Configuration

The Minimal Mistakes skin was [customized](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/) by copying the original `main.scss` file to `assets\css`. Any changes to the theme's Sass variables must be made before the any `@import`lines.

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
