import React from "react";
import { PureComponent } from "react";
import Rectangle from "react-rectangle";

import {
  getCardColor,
  getIconColor,
  toKnowledgeString,
  toIconString,
} from '../Helpers/Helpers';
import Fonts from '../Primitives/Fonts';
import './css/Card.css';
import { withSize } from "react-sizeme";

class SmallCard extends PureComponent {
  render() {
    const {
      name,
      cost,
      knowledgeCost,
      play,
      size,
      borderColor,
      opacity
    } = this.props;

    const backColor = borderColor ? borderColor : "black";
    return (
      <div>
        <Fonts />
        <Rectangle
          aspectRatio={[22, 3]}
          style={{
            opacity: opacity,
            backgroundColor: backColor,
            overflow: "hidden",
            textAlign: "justify",
          }}
        >
          <div
            className={"card-inner"+(play?"-play":"")}
            style={{ backgroundColor: getCardColor(knowledgeCost),
              fontSize: size.width/20+"px" }}
          >
            <div className="small-card-name">
                <span style={{ fontWeight: "500" }}>{cost}</span>
                <span
                  style={{
                    fontWeight: "500",
                    color: getIconColor(knowledgeCost)
                  }}
                >
                  {toIconString(toKnowledgeString(knowledgeCost))}
                </span>
                {" | " + name}
            </div>
          </div>
        </Rectangle>
      </div>
    );
  }
}

export default withSize()(SmallCard)