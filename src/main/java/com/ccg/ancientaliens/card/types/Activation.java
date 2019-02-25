/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ccg.ancientaliens.card.types;

import com.ccg.ancientaliens.game.Game;
import com.ccg.ancientaliens.helpers.Hashmap;
import com.ccg.ancientaliens.protocol.Types;
import java.util.function.BiConsumer;

/**
 *
 * @author pseudo
 */
public class Activation extends Card {
    
    BiConsumer<Game, Card> effect;
    
    public Activation (String owner, String text, BiConsumer<Game, Card> effect){
        super(text, 0, new Hashmap<>(), text, owner);
        this.effect = effect;
    }
    
    @Override
    public boolean canPlay(Game game) { return false; }

    @Override
    public void resolve(Game game) { effect.accept(game, this); }
    
    @Override
    public Types.Card.Builder toCardMessage() {
        return super.toCardMessage()
                .setType("Activation");
    }
    
}
