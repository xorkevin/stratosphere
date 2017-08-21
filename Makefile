GHPAGESDIR=stratosphere-gh-pages
TESTDIR=test
BUILDDIR=lib

all: build

dev:
	npm run build-dev

build:
	npm run build

ghpages: build
	cp -r $(TESTDIR)/* ../$(GHPAGESDIR)
	cp $(BUILDDIR)/stratosphere.css ../$(GHPAGESDIR)
	cp $(BUILDDIR)/stratosphere.js ../$(GHPAGESDIR)
