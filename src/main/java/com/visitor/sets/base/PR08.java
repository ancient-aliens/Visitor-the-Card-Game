package com.visitor.sets.base;

import com.visitor.card.types.Ritual;
import com.visitor.game.Game;
import com.visitor.helpers.CounterMap;

import static com.visitor.game.Game.Zone.Discard_Pile;
import static com.visitor.protocol.Types.Knowledge.PURPLE;

public class PR08 extends Ritual {

	public PR08 (Game game, String owner) {
		super(game, "UR01", 5,
				new CounterMap<>(PURPLE, 1),
				"Resurrect a unit from your discard pile.",
				owner);

		playable
				.setTargetSingleUnit(Discard_Pile, game::resurrect);
	}
}