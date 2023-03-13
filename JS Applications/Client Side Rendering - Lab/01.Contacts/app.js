import { contacts } from './contacts.js';
import { render} from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js'
import { templatePreview } from './template.js';

const contactsElement = document.querySelector('#contacts');
render(repeat(contacts, templatePreview), contactsElement);