all: build/angularjs-lively.min.js

build/angularjs-lively.js: index.js
	./node_modules/.bin/browserify index.js -o build/angularjs-lively.js

build/angularjs-lively.min.js: build/angularjs-lively.js
	./node_modules/.bin/uglifyjs build/angularjs-lively.js > build/angularjs-lively.min.js

clean:
	rm -f build/*
