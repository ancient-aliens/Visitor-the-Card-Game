/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.visitor.set1;

import com.visitor.card.types.Activation;
import com.visitor.card.types.Item;
import com.visitor.game.Game;
import com.visitor.helpers.Arraylist;
import static com.visitor.protocol.Types.Knowledge.BLUE;
import com.visitor.set1.Meltdown;
import com.visitor.helpers.Hashmap;


/**
 *
 * @author pseudo
 */
public class SelfdestructNode extends Item {
    
    public SelfdestructNode (String owner){
        super("Self-destruct Node", 2, new Hashmap(BLUE, 2), 
                "Discard 2: Transform ~ into AI01.", owner);
        subtypes.add("Kit");
    }

    @Override
    public boolean canActivate(Game game) {
        return game.getZone(controller, "hand").size() >= 2;
    }
    
    @Override
    public void activate(Game game) {
        game.discard(controller, 2);
        game.addToStack(new Activation(controller, "Transform ~ into AI01.",
            (x) -> { 
                if(game.isIn(controller, id, "play")) 
                    game.replaceWith(this, new Meltdown(this));
        }, new Arraylist<>(id)));
    }
}