import { HomeScreen } from "./home";
import { LevelSelect } from "./level_select";
import { MbgLevelSelect } from "./level_select_mbg";
import { MbgHomeScreen } from "./home_mbg";
import { Menu } from "./menu";
import { LoadingScreen } from "./loading";
import { MbgLoadingScreen } from "./loading_mbg";
import { OptionsScreen } from "./options";
import { MbgOptionsScreen } from "./options_mbg";
import { HelpScreen } from "./help";
import { MbgHelpScreen } from "./help_mbg";
import { Hud } from "./hud";
import { MbgHud } from "./hud_mbg";

export class MbgMenu extends Menu {
	get uiAssetPath() {
		return './assets/ui/';
	}
	audioAssetPath = './assets/data/sound/';
	menuMusicSrc = 'shell.ogg';

	createHome(): HomeScreen {
		return new MbgHomeScreen(this);
	}

	createLevelSelect(): LevelSelect {
		return new MbgLevelSelect(this);
	}

	createLoadingScreen(): LoadingScreen {
		return new MbgLoadingScreen(this);
	}

	createOptionsScreen(): OptionsScreen {
		return new MbgOptionsScreen(this);
	}

	createHelpScreen(): HelpScreen {
		return new MbgHelpScreen(this);
	}

	createHud(): Hud {
		return new MbgHud();
	}

	getMenuDiv() {
		return document.querySelector('#menu') as HTMLDivElement;
	}

	async init() {
		super.init();
	}
}