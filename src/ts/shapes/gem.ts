import { Shape } from "../shape";
import { MissionElementItem } from "../parsing/mis_parser";
import { Util } from "../util";
import { state } from "../state";

const GEM_COLORS = ["blue", "red", "yellow", "purple", "green", "turquoise", "orange", "black"];

export class Gem extends Shape {
	dtsPath = "shapes/items/gem.dts";
	ambientRotate = true;
	collideable = false;
	pickedUp = false;
	shareMaterials = false;
	sounds = ['gotgem.wav', 'gotallgems.wav', 'missinggems.wav'];

	constructor(element: MissionElementItem) {
		super();

		let color = element.dataBlock.slice("GemItem".length);
		if (color.length === 0) color = Util.randomFromArray(GEM_COLORS);

		this.matNamesOverride["base.gem"] = color + ".gem";
	}

	onMarbleInside() {
		if (this.pickedUp) return;

		this.pickedUp = true;
		this.setOpacity(0);
		this.level.pickUpGem();
	}

	reset() {
		this.pickedUp = false;
		this.setOpacity(1);
	}
}