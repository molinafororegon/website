const fs = require('fs');
const pkg = require('./package.json');
const filename = 'assets/js/main.min.js';
const script = fs.readFileSync(filename);
const padStart = str => ('0' + str).slice(-2)
const dateObj = new Date;
const date = `${dateObj.getFullYear()}-${padStart(dateObj.getMonth() + 1)}-${padStart(dateObj.getDate())}`;
const banner = `/*!
 * Minimal Mistakes Jekyll Theme ${pkg.version} by ${pkg.author}
 * Copyright ${dateObj.getFullYear()} Michael Rose - mademistakes.com | @mmistakes
 * Licensed under ${pkg.license}
 */
`;

if (script.slice(0, 3) != '/**') {
  fs.writeFileSync(filename, banner + script);
}

<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"cbb92c1fe17e5a13b3fa6fd06","lid":"247f5fd296"}) })</script>
