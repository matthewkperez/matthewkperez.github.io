# matthewkperez.github.io

Personal academic portfolio at [matthewkperez.com](https://matthewkperez.com).

## Branches

| Branch | Deploys to | URL |
|---|---|---|
| `master` | GitHub Pages | matthewkperez.com |
| `staging` | Netlify | staging--matthewkperez.netlify.app |

## Workflow

### Make and preview changes

```bash
git checkout staging
# edit files
git push origin staging
```

Preview at **https://staging--matthewkperez.netlify.app** (updates in ~10 seconds).

### Release to production

```bash
git checkout master
git merge staging
git push origin master
```

Goes live at **matthewkperez.com** in 1–2 minutes via GitHub Pages.
