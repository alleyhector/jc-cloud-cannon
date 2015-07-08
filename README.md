## Code for Jekyll white-label site

Site is built on Jekyll and deployed on Amazon S3. See the
[Jeckyll docs](http://jekyllrb.com/) and the
[s3_website docs](https://github.com/laurilehmijoki/s3_website) for
more detail.

TODO: The website is automatically deployed each time a change is commited
to this repository.

## Editing content

The site is simply a config file and a group of markdown files that get combined with some
html to form a website. Simply edit the html/config files and commit the changes.

## Editing the code

NOTE: Only edit .sass files. DO NOT edit any .css files. The sass
files will get compiled into the css. For more information please look
at the [sass](http://sass-lang.com/) documentation and the [compass](http://compass-style.org/) documentation.

If you would like to edit something else such as the CSS or
Javascript, first [clone this repository](http://rogerdudler.github.io/git-guide/).

Then `cd` into the directory and edit the relevant .sass file.

If you do not have ruby installed, install [rvm](https://rvm.io/rvm/install) and the version required in this apps ruby-env file. Then run `gem install bundler`.

When you're ready to see your changes, run:

```bash
$ bundle install
$ jekyll serve --watch
```

That will give you a version of the site running locally, which you can see by opening a browser and navigating to "localhost:4000". Now, open up another terminal tab (cmd+t) and initiate Guard to compile your edited coffeescript and sass files.

```bash
$ bundle exec guard
$ all
```

After this is done, refresh the local version of the site; your CSS should have compiled.

### Editing templates

The main homepage is index.html in the root directory of this
project. It contains most of the markup but some parts are
configureable such as the title, description, and contact email in
_config.yml.
