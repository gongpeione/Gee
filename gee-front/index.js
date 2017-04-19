/**
 * Created by geeku on 19/04/2017.
 */
import router from './Router';

const allLinks = document.querySelectorAll('a');

const geeRouter = new router([
	{
		path: '/',
		handler: () => {},
		default: true
	}
]);
geeRouter.parse(allLinks);