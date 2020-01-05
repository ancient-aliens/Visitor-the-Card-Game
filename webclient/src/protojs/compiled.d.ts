import * as $protobuf from "protobufjs";
/** Properties of a PlayCard. */
export interface IPlayCard {

    /** PlayCard cardID */
    cardID?: (string|null);
}

/** Represents a PlayCard. */
export class PlayCard implements IPlayCard {

    /**
     * Constructs a new PlayCard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayCard);

    /** PlayCard cardID. */
    public cardID: string;

    /**
     * Creates a new PlayCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayCard instance
     */
    public static create(properties?: IPlayCard): PlayCard;

    /**
     * Encodes the specified PlayCard message. Does not implicitly {@link PlayCard.verify|verify} messages.
     * @param message PlayCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayCard message, length delimited. Does not implicitly {@link PlayCard.verify|verify} messages.
     * @param message PlayCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayCard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayCard;

    /**
     * Decodes a PlayCard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayCard;

    /**
     * Verifies a PlayCard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayCard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayCard
     */
    public static fromObject(object: { [k: string]: any }): PlayCard;

    /**
     * Creates a plain object from a PlayCard message. Also converts values to other types if specified.
     * @param message PlayCard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayCard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActivateCard. */
export interface IActivateCard {

    /** ActivateCard cardID */
    cardID?: (string|null);
}

/** Represents an ActivateCard. */
export class ActivateCard implements IActivateCard {

    /**
     * Constructs a new ActivateCard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivateCard);

    /** ActivateCard cardID. */
    public cardID: string;

    /**
     * Creates a new ActivateCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivateCard instance
     */
    public static create(properties?: IActivateCard): ActivateCard;

    /**
     * Encodes the specified ActivateCard message. Does not implicitly {@link ActivateCard.verify|verify} messages.
     * @param message ActivateCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivateCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActivateCard message, length delimited. Does not implicitly {@link ActivateCard.verify|verify} messages.
     * @param message ActivateCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivateCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivateCard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivateCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivateCard;

    /**
     * Decodes an ActivateCard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActivateCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivateCard;

    /**
     * Verifies an ActivateCard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActivateCard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActivateCard
     */
    public static fromObject(object: { [k: string]: any }): ActivateCard;

    /**
     * Creates a plain object from an ActivateCard message. Also converts values to other types if specified.
     * @param message ActivateCard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActivateCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActivateCard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StudyCard. */
export interface IStudyCard {

    /** StudyCard cardID */
    cardID?: (string|null);
}

/** Represents a StudyCard. */
export class StudyCard implements IStudyCard {

    /**
     * Constructs a new StudyCard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStudyCard);

    /** StudyCard cardID. */
    public cardID: string;

    /**
     * Creates a new StudyCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StudyCard instance
     */
    public static create(properties?: IStudyCard): StudyCard;

    /**
     * Encodes the specified StudyCard message. Does not implicitly {@link StudyCard.verify|verify} messages.
     * @param message StudyCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStudyCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StudyCard message, length delimited. Does not implicitly {@link StudyCard.verify|verify} messages.
     * @param message StudyCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStudyCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StudyCard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StudyCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StudyCard;

    /**
     * Decodes a StudyCard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StudyCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StudyCard;

    /**
     * Verifies a StudyCard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StudyCard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StudyCard
     */
    public static fromObject(object: { [k: string]: any }): StudyCard;

    /**
     * Creates a plain object from a StudyCard message. Also converts values to other types if specified.
     * @param message StudyCard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StudyCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StudyCard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Pass. */
export interface IPass {
}

/** Represents a Pass. */
export class Pass implements IPass {

    /**
     * Constructs a new Pass.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPass);

    /**
     * Creates a new Pass instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Pass instance
     */
    public static create(properties?: IPass): Pass;

    /**
     * Encodes the specified Pass message. Does not implicitly {@link Pass.verify|verify} messages.
     * @param message Pass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Pass message, length delimited. Does not implicitly {@link Pass.verify|verify} messages.
     * @param message Pass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Pass message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Pass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Pass;

    /**
     * Decodes a Pass message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Pass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Pass;

    /**
     * Verifies a Pass message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Pass message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Pass
     */
    public static fromObject(object: { [k: string]: any }): Pass;

    /**
     * Creates a plain object from a Pass message. Also converts values to other types if specified.
     * @param message Pass
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Pass, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Pass to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Redraw. */
export interface IRedraw {
}

/** Represents a Redraw. */
export class Redraw implements IRedraw {

    /**
     * Constructs a new Redraw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedraw);

    /**
     * Creates a new Redraw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Redraw instance
     */
    public static create(properties?: IRedraw): Redraw;

    /**
     * Encodes the specified Redraw message. Does not implicitly {@link Redraw.verify|verify} messages.
     * @param message Redraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Redraw message, length delimited. Does not implicitly {@link Redraw.verify|verify} messages.
     * @param message Redraw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRedraw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Redraw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Redraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Redraw;

    /**
     * Decodes a Redraw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Redraw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Redraw;

    /**
     * Verifies a Redraw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Redraw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Redraw
     */
    public static fromObject(object: { [k: string]: any }): Redraw;

    /**
     * Creates a plain object from a Redraw message. Also converts values to other types if specified.
     * @param message Redraw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Redraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Redraw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Keep. */
export interface IKeep {
}

/** Represents a Keep. */
export class Keep implements IKeep {

    /**
     * Constructs a new Keep.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKeep);

    /**
     * Creates a new Keep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Keep instance
     */
    public static create(properties?: IKeep): Keep;

    /**
     * Encodes the specified Keep message. Does not implicitly {@link Keep.verify|verify} messages.
     * @param message Keep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKeep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Keep message, length delimited. Does not implicitly {@link Keep.verify|verify} messages.
     * @param message Keep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKeep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Keep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Keep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Keep;

    /**
     * Decodes a Keep message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Keep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Keep;

    /**
     * Verifies a Keep message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Keep message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Keep
     */
    public static fromObject(object: { [k: string]: any }): Keep;

    /**
     * Creates a plain object from a Keep message. Also converts values to other types if specified.
     * @param message Keep
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Keep, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Keep to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Concede. */
export interface IConcede {
}

/** Represents a Concede. */
export class Concede implements IConcede {

    /**
     * Constructs a new Concede.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConcede);

    /**
     * Creates a new Concede instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Concede instance
     */
    public static create(properties?: IConcede): Concede;

    /**
     * Encodes the specified Concede message. Does not implicitly {@link Concede.verify|verify} messages.
     * @param message Concede message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConcede, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Concede message, length delimited. Does not implicitly {@link Concede.verify|verify} messages.
     * @param message Concede message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConcede, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Concede message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Concede
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Concede;

    /**
     * Decodes a Concede message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Concede
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Concede;

    /**
     * Verifies a Concede message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Concede message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Concede
     */
    public static fromObject(object: { [k: string]: any }): Concede;

    /**
     * Creates a plain object from a Concede message. Also converts values to other types if specified.
     * @param message Concede
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Concede, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Concede to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderCardsResponse. */
export interface IOrderCardsResponse {

    /** OrderCardsResponse orderedCards */
    orderedCards?: (string[]|null);
}

/** Represents an OrderCardsResponse. */
export class OrderCardsResponse implements IOrderCardsResponse {

    /**
     * Constructs a new OrderCardsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderCardsResponse);

    /** OrderCardsResponse orderedCards. */
    public orderedCards: string[];

    /**
     * Creates a new OrderCardsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderCardsResponse instance
     */
    public static create(properties?: IOrderCardsResponse): OrderCardsResponse;

    /**
     * Encodes the specified OrderCardsResponse message. Does not implicitly {@link OrderCardsResponse.verify|verify} messages.
     * @param message OrderCardsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderCardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderCardsResponse message, length delimited. Does not implicitly {@link OrderCardsResponse.verify|verify} messages.
     * @param message OrderCardsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderCardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderCardsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderCardsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderCardsResponse;

    /**
     * Decodes an OrderCardsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderCardsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderCardsResponse;

    /**
     * Verifies an OrderCardsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderCardsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderCardsResponse
     */
    public static fromObject(object: { [k: string]: any }): OrderCardsResponse;

    /**
     * Creates a plain object from an OrderCardsResponse message. Also converts values to other types if specified.
     * @param message OrderCardsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderCardsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderCardsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SelectFromResponse. */
export interface ISelectFromResponse {

    /** SelectFromResponse messageType */
    messageType?: (SelectFromType|null);

    /** SelectFromResponse selected */
    selected?: (string[]|null);
}

/** Represents a SelectFromResponse. */
export class SelectFromResponse implements ISelectFromResponse {

    /**
     * Constructs a new SelectFromResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectFromResponse);

    /** SelectFromResponse messageType. */
    public messageType: SelectFromType;

    /** SelectFromResponse selected. */
    public selected: string[];

    /**
     * Creates a new SelectFromResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectFromResponse instance
     */
    public static create(properties?: ISelectFromResponse): SelectFromResponse;

    /**
     * Encodes the specified SelectFromResponse message. Does not implicitly {@link SelectFromResponse.verify|verify} messages.
     * @param message SelectFromResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectFromResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectFromResponse message, length delimited. Does not implicitly {@link SelectFromResponse.verify|verify} messages.
     * @param message SelectFromResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectFromResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectFromResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectFromResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectFromResponse;

    /**
     * Decodes a SelectFromResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectFromResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectFromResponse;

    /**
     * Verifies a SelectFromResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectFromResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectFromResponse
     */
    public static fromObject(object: { [k: string]: any }): SelectFromResponse;

    /**
     * Creates a plain object from a SelectFromResponse message. Also converts values to other types if specified.
     * @param message SelectFromResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectFromResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectFromResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SelectXValueResponse. */
export interface ISelectXValueResponse {

    /** SelectXValueResponse selectedXValue */
    selectedXValue?: (number|null);
}

/** Represents a SelectXValueResponse. */
export class SelectXValueResponse implements ISelectXValueResponse {

    /**
     * Constructs a new SelectXValueResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectXValueResponse);

    /** SelectXValueResponse selectedXValue. */
    public selectedXValue: number;

    /**
     * Creates a new SelectXValueResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectXValueResponse instance
     */
    public static create(properties?: ISelectXValueResponse): SelectXValueResponse;

    /**
     * Encodes the specified SelectXValueResponse message. Does not implicitly {@link SelectXValueResponse.verify|verify} messages.
     * @param message SelectXValueResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectXValueResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectXValueResponse message, length delimited. Does not implicitly {@link SelectXValueResponse.verify|verify} messages.
     * @param message SelectXValueResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectXValueResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectXValueResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectXValueResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectXValueResponse;

    /**
     * Decodes a SelectXValueResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectXValueResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectXValueResponse;

    /**
     * Verifies a SelectXValueResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectXValueResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectXValueResponse
     */
    public static fromObject(object: { [k: string]: any }): SelectXValueResponse;

    /**
     * Creates a plain object from a SelectXValueResponse message. Also converts values to other types if specified.
     * @param message SelectXValueResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectXValueResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectXValueResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SelectAttackersResponse. */
export interface ISelectAttackersResponse {

    /** SelectAttackersResponse attackers */
    attackers?: (IAttackerAssignment[]|null);
}

/** Represents a SelectAttackersResponse. */
export class SelectAttackersResponse implements ISelectAttackersResponse {

    /**
     * Constructs a new SelectAttackersResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectAttackersResponse);

    /** SelectAttackersResponse attackers. */
    public attackers: IAttackerAssignment[];

    /**
     * Creates a new SelectAttackersResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectAttackersResponse instance
     */
    public static create(properties?: ISelectAttackersResponse): SelectAttackersResponse;

    /**
     * Encodes the specified SelectAttackersResponse message. Does not implicitly {@link SelectAttackersResponse.verify|verify} messages.
     * @param message SelectAttackersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectAttackersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectAttackersResponse message, length delimited. Does not implicitly {@link SelectAttackersResponse.verify|verify} messages.
     * @param message SelectAttackersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectAttackersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectAttackersResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectAttackersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectAttackersResponse;

    /**
     * Decodes a SelectAttackersResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectAttackersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectAttackersResponse;

    /**
     * Verifies a SelectAttackersResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectAttackersResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectAttackersResponse
     */
    public static fromObject(object: { [k: string]: any }): SelectAttackersResponse;

    /**
     * Creates a plain object from a SelectAttackersResponse message. Also converts values to other types if specified.
     * @param message SelectAttackersResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectAttackersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectAttackersResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SelectBlockersResponse. */
export interface ISelectBlockersResponse {

    /** SelectBlockersResponse blockers */
    blockers?: (IBlockerAssignment[]|null);
}

/** Represents a SelectBlockersResponse. */
export class SelectBlockersResponse implements ISelectBlockersResponse {

    /**
     * Constructs a new SelectBlockersResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectBlockersResponse);

    /** SelectBlockersResponse blockers. */
    public blockers: IBlockerAssignment[];

    /**
     * Creates a new SelectBlockersResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectBlockersResponse instance
     */
    public static create(properties?: ISelectBlockersResponse): SelectBlockersResponse;

    /**
     * Encodes the specified SelectBlockersResponse message. Does not implicitly {@link SelectBlockersResponse.verify|verify} messages.
     * @param message SelectBlockersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectBlockersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectBlockersResponse message, length delimited. Does not implicitly {@link SelectBlockersResponse.verify|verify} messages.
     * @param message SelectBlockersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectBlockersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectBlockersResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectBlockersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectBlockersResponse;

    /**
     * Decodes a SelectBlockersResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectBlockersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectBlockersResponse;

    /**
     * Verifies a SelectBlockersResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectBlockersResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectBlockersResponse
     */
    public static fromObject(object: { [k: string]: any }): SelectBlockersResponse;

    /**
     * Creates a plain object from a SelectBlockersResponse message. Also converts values to other types if specified.
     * @param message SelectBlockersResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectBlockersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectBlockersResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SaveGameState. */
export interface ISaveGameState {

    /** SaveGameState filename */
    filename?: (string|null);
}

/** Represents a SaveGameState. */
export class SaveGameState implements ISaveGameState {

    /**
     * Constructs a new SaveGameState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISaveGameState);

    /** SaveGameState filename. */
    public filename: string;

    /**
     * Creates a new SaveGameState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SaveGameState instance
     */
    public static create(properties?: ISaveGameState): SaveGameState;

    /**
     * Encodes the specified SaveGameState message. Does not implicitly {@link SaveGameState.verify|verify} messages.
     * @param message SaveGameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISaveGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SaveGameState message, length delimited. Does not implicitly {@link SaveGameState.verify|verify} messages.
     * @param message SaveGameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISaveGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SaveGameState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SaveGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SaveGameState;

    /**
     * Decodes a SaveGameState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SaveGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SaveGameState;

    /**
     * Verifies a SaveGameState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SaveGameState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SaveGameState
     */
    public static fromObject(object: { [k: string]: any }): SaveGameState;

    /**
     * Creates a plain object from a SaveGameState message. Also converts values to other types if specified.
     * @param message SaveGameState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SaveGameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SaveGameState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientGameMessage. */
export interface IClientGameMessage {

    /** ClientGameMessage playCard */
    playCard?: (IPlayCard|null);

    /** ClientGameMessage activateCard */
    activateCard?: (IActivateCard|null);

    /** ClientGameMessage studyCard */
    studyCard?: (IStudyCard|null);

    /** ClientGameMessage pass */
    pass?: (IPass|null);

    /** ClientGameMessage redraw */
    redraw?: (IRedraw|null);

    /** ClientGameMessage keep */
    keep?: (IKeep|null);

    /** ClientGameMessage concede */
    concede?: (IConcede|null);

    /** ClientGameMessage orderCardsResponse */
    orderCardsResponse?: (IOrderCardsResponse|null);

    /** ClientGameMessage selectFromResponse */
    selectFromResponse?: (ISelectFromResponse|null);

    /** ClientGameMessage selectXValueResponse */
    selectXValueResponse?: (ISelectXValueResponse|null);

    /** ClientGameMessage selectAttackersResponse */
    selectAttackersResponse?: (ISelectAttackersResponse|null);

    /** ClientGameMessage selectBlockersResponse */
    selectBlockersResponse?: (ISelectBlockersResponse|null);

    /** ClientGameMessage saveGameState */
    saveGameState?: (ISaveGameState|null);
}

/** Represents a ClientGameMessage. */
export class ClientGameMessage implements IClientGameMessage {

    /**
     * Constructs a new ClientGameMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientGameMessage);

    /** ClientGameMessage playCard. */
    public playCard?: (IPlayCard|null);

    /** ClientGameMessage activateCard. */
    public activateCard?: (IActivateCard|null);

    /** ClientGameMessage studyCard. */
    public studyCard?: (IStudyCard|null);

    /** ClientGameMessage pass. */
    public pass?: (IPass|null);

    /** ClientGameMessage redraw. */
    public redraw?: (IRedraw|null);

    /** ClientGameMessage keep. */
    public keep?: (IKeep|null);

    /** ClientGameMessage concede. */
    public concede?: (IConcede|null);

    /** ClientGameMessage orderCardsResponse. */
    public orderCardsResponse?: (IOrderCardsResponse|null);

    /** ClientGameMessage selectFromResponse. */
    public selectFromResponse?: (ISelectFromResponse|null);

    /** ClientGameMessage selectXValueResponse. */
    public selectXValueResponse?: (ISelectXValueResponse|null);

    /** ClientGameMessage selectAttackersResponse. */
    public selectAttackersResponse?: (ISelectAttackersResponse|null);

    /** ClientGameMessage selectBlockersResponse. */
    public selectBlockersResponse?: (ISelectBlockersResponse|null);

    /** ClientGameMessage saveGameState. */
    public saveGameState?: (ISaveGameState|null);

    /** ClientGameMessage payload. */
    public payload?: ("playCard"|"activateCard"|"studyCard"|"pass"|"redraw"|"keep"|"concede"|"orderCardsResponse"|"selectFromResponse"|"selectXValueResponse"|"selectAttackersResponse"|"selectBlockersResponse"|"saveGameState");

    /**
     * Creates a new ClientGameMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientGameMessage instance
     */
    public static create(properties?: IClientGameMessage): ClientGameMessage;

    /**
     * Encodes the specified ClientGameMessage message. Does not implicitly {@link ClientGameMessage.verify|verify} messages.
     * @param message ClientGameMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientGameMessage message, length delimited. Does not implicitly {@link ClientGameMessage.verify|verify} messages.
     * @param message ClientGameMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientGameMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientGameMessage;

    /**
     * Decodes a ClientGameMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientGameMessage;

    /**
     * Verifies a ClientGameMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientGameMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientGameMessage
     */
    public static fromObject(object: { [k: string]: any }): ClientGameMessage;

    /**
     * Creates a plain object from a ClientGameMessage message. Also converts values to other types if specified.
     * @param message ClientGameMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientGameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientGameMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** SelectFromType enum. */
namespace SelectFromType {

    /** NOTYPE value */
    let NOTYPE: number;

    /** LIST value */
    let LIST: number;

    /** HAND value */
    let HAND: number;

    /** PLAY value */
    let PLAY: number;

    /** SCRAPYARD value */
    let SCRAPYARD: number;

    /** VOID value */
    let VOID: number;

    /** STACK value */
    let STACK: number;
}

/** Represents a Table. */
export class Table implements ITable {

    /**
     * Constructs a new Table.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITable);

    /** Table id. */
    public id: string;

    /** Table creator. */
    public creator: string;

    /** Table opponent. */
    public opponent: string;

    /**
     * Creates a new Table instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Table instance
     */
    public static create(properties?: ITable): Table;

    /**
     * Encodes the specified Table message. Does not implicitly {@link Table.verify|verify} messages.
     * @param message Table message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Table message, length delimited. Does not implicitly {@link Table.verify|verify} messages.
     * @param message Table message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Table message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Table
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Table;

    /**
     * Decodes a Table message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Table
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Table;

    /**
     * Verifies a Table message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Table message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Table
     */
    public static fromObject(object: { [k: string]: any }): Table;

    /**
     * Creates a plain object from a Table message. Also converts values to other types if specified.
     * @param message Table
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Table to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Knowledge enum. */
namespace Knowledge {

    /** NONE value */
    let NONE: number;

    /** BLACK value */
    let BLACK: number;

    /** GREEN value */
    let GREEN: number;

    /** RED value */
    let RED: number;

    /** BLUE value */
    let BLUE: number;

    /** YELLOW value */
    let YELLOW: number;
}

/** Represents a KnowledgeGroup. */
export class KnowledgeGroup implements IKnowledgeGroup {

    /**
     * Constructs a new KnowledgeGroup.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKnowledgeGroup);

    /** KnowledgeGroup knowledge. */
    public knowledge: Knowledge;

    /** KnowledgeGroup count. */
    public count: number;

    /**
     * Creates a new KnowledgeGroup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KnowledgeGroup instance
     */
    public static create(properties?: IKnowledgeGroup): KnowledgeGroup;

    /**
     * Encodes the specified KnowledgeGroup message. Does not implicitly {@link KnowledgeGroup.verify|verify} messages.
     * @param message KnowledgeGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKnowledgeGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KnowledgeGroup message, length delimited. Does not implicitly {@link KnowledgeGroup.verify|verify} messages.
     * @param message KnowledgeGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKnowledgeGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KnowledgeGroup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KnowledgeGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KnowledgeGroup;

    /**
     * Decodes a KnowledgeGroup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KnowledgeGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KnowledgeGroup;

    /**
     * Verifies a KnowledgeGroup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a KnowledgeGroup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KnowledgeGroup
     */
    public static fromObject(object: { [k: string]: any }): KnowledgeGroup;

    /**
     * Creates a plain object from a KnowledgeGroup message. Also converts values to other types if specified.
     * @param message KnowledgeGroup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KnowledgeGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KnowledgeGroup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Counter enum. */
namespace Counter {

    /** NOCOUNTER value */
    let NOCOUNTER: number;

    /** CHARGE value */
    let CHARGE: number;
}

/** Represents a CounterGroup. */
export class CounterGroup implements ICounterGroup {

    /**
     * Constructs a new CounterGroup.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICounterGroup);

    /** CounterGroup counter. */
    public counter: Counter;

    /** CounterGroup count. */
    public count: number;

    /**
     * Creates a new CounterGroup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CounterGroup instance
     */
    public static create(properties?: ICounterGroup): CounterGroup;

    /**
     * Encodes the specified CounterGroup message. Does not implicitly {@link CounterGroup.verify|verify} messages.
     * @param message CounterGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICounterGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CounterGroup message, length delimited. Does not implicitly {@link CounterGroup.verify|verify} messages.
     * @param message CounterGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICounterGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CounterGroup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CounterGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CounterGroup;

    /**
     * Decodes a CounterGroup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CounterGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CounterGroup;

    /**
     * Verifies a CounterGroup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CounterGroup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CounterGroup
     */
    public static fromObject(object: { [k: string]: any }): CounterGroup;

    /**
     * Creates a plain object from a CounterGroup message. Also converts values to other types if specified.
     * @param message CounterGroup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CounterGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CounterGroup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Blocker. */
export class Blocker implements IBlocker {

    /**
     * Constructs a new Blocker.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlocker);

    /** Blocker blockerId. */
    public blockerId: string;

    /** Blocker possibleBlockTargets. */
    public possibleBlockTargets: string[];

    /**
     * Creates a new Blocker instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Blocker instance
     */
    public static create(properties?: IBlocker): Blocker;

    /**
     * Encodes the specified Blocker message. Does not implicitly {@link Blocker.verify|verify} messages.
     * @param message Blocker message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlocker, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Blocker message, length delimited. Does not implicitly {@link Blocker.verify|verify} messages.
     * @param message Blocker message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlocker, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Blocker message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Blocker
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Blocker;

    /**
     * Decodes a Blocker message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Blocker
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Blocker;

    /**
     * Verifies a Blocker message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Blocker message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Blocker
     */
    public static fromObject(object: { [k: string]: any }): Blocker;

    /**
     * Creates a plain object from a Blocker message. Also converts values to other types if specified.
     * @param message Blocker
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Blocker, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Blocker to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an Attacker. */
export class Attacker implements IAttacker {

    /**
     * Constructs a new Attacker.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAttacker);

    /** Attacker attackerId. */
    public attackerId: string;

    /** Attacker possibleAttackTargets. */
    public possibleAttackTargets: string[];

    /**
     * Creates a new Attacker instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Attacker instance
     */
    public static create(properties?: IAttacker): Attacker;

    /**
     * Encodes the specified Attacker message. Does not implicitly {@link Attacker.verify|verify} messages.
     * @param message Attacker message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAttacker, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Attacker message, length delimited. Does not implicitly {@link Attacker.verify|verify} messages.
     * @param message Attacker message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAttacker, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Attacker message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Attacker
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Attacker;

    /**
     * Decodes an Attacker message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Attacker
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Attacker;

    /**
     * Verifies an Attacker message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Attacker message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Attacker
     */
    public static fromObject(object: { [k: string]: any }): Attacker;

    /**
     * Creates a plain object from an Attacker message. Also converts values to other types if specified.
     * @param message Attacker
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Attacker, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Attacker to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an AttackerAssignment. */
export class AttackerAssignment implements IAttackerAssignment {

    /**
     * Constructs a new AttackerAssignment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAttackerAssignment);

    /** AttackerAssignment attackerId. */
    public attackerId: string;

    /** AttackerAssignment attacksTo. */
    public attacksTo: string;

    /**
     * Creates a new AttackerAssignment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttackerAssignment instance
     */
    public static create(properties?: IAttackerAssignment): AttackerAssignment;

    /**
     * Encodes the specified AttackerAssignment message. Does not implicitly {@link AttackerAssignment.verify|verify} messages.
     * @param message AttackerAssignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAttackerAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttackerAssignment message, length delimited. Does not implicitly {@link AttackerAssignment.verify|verify} messages.
     * @param message AttackerAssignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAttackerAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttackerAssignment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttackerAssignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AttackerAssignment;

    /**
     * Decodes an AttackerAssignment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttackerAssignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttackerAssignment;

    /**
     * Verifies an AttackerAssignment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AttackerAssignment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttackerAssignment
     */
    public static fromObject(object: { [k: string]: any }): AttackerAssignment;

    /**
     * Creates a plain object from an AttackerAssignment message. Also converts values to other types if specified.
     * @param message AttackerAssignment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AttackerAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AttackerAssignment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a BlockerAssignment. */
export class BlockerAssignment implements IBlockerAssignment {

    /**
     * Constructs a new BlockerAssignment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlockerAssignment);

    /** BlockerAssignment blockerId. */
    public blockerId: string;

    /** BlockerAssignment blockedBy. */
    public blockedBy: string;

    /**
     * Creates a new BlockerAssignment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockerAssignment instance
     */
    public static create(properties?: IBlockerAssignment): BlockerAssignment;

    /**
     * Encodes the specified BlockerAssignment message. Does not implicitly {@link BlockerAssignment.verify|verify} messages.
     * @param message BlockerAssignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlockerAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BlockerAssignment message, length delimited. Does not implicitly {@link BlockerAssignment.verify|verify} messages.
     * @param message BlockerAssignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlockerAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BlockerAssignment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockerAssignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BlockerAssignment;

    /**
     * Decodes a BlockerAssignment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockerAssignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BlockerAssignment;

    /**
     * Verifies a BlockerAssignment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BlockerAssignment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockerAssignment
     */
    public static fromObject(object: { [k: string]: any }): BlockerAssignment;

    /**
     * Creates a plain object from a BlockerAssignment message. Also converts values to other types if specified.
     * @param message BlockerAssignment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BlockerAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BlockerAssignment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Card. */
export class Card implements ICard {

    /**
     * Constructs a new Card.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICard);

    /** Card id. */
    public id: string;

    /** Card name. */
    public name: string;

    /** Card counters. */
    public counters: ICounterGroup[];

    /** Card depleted. */
    public depleted: boolean;

    /** Card marked. */
    public marked: boolean;

    /** Card targets. */
    public targets: string[];

    /** Card description. */
    public description: string;

    /** Card cost. */
    public cost: string;

    /** Card knowledgeCost. */
    public knowledgeCost: IKnowledgeGroup[];

    /** Card type. */
    public type: string;

    /** Card subtypes. */
    public subtypes: string[];

    /** Card health. */
    public health: number;

    /** Card delay. */
    public delay: number;

    /** Card loyalty. */
    public loyalty: number;

    /** Card shield. */
    public shield: number;

    /** Card reflect. */
    public reflect: number;

    /** Card attack. */
    public attack: number;

    /** Card deploying. */
    public deploying: boolean;

    /**
     * Creates a new Card instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Card instance
     */
    public static create(properties?: ICard): Card;

    /**
     * Encodes the specified Card message. Does not implicitly {@link Card.verify|verify} messages.
     * @param message Card message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Card message, length delimited. Does not implicitly {@link Card.verify|verify} messages.
     * @param message Card message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Card message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Card
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Card;

    /**
     * Decodes a Card message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Card
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Card;

    /**
     * Verifies a Card message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Card message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Card
     */
    public static fromObject(object: { [k: string]: any }): Card;

    /**
     * Creates a plain object from a Card message. Also converts values to other types if specified.
     * @param message Card
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Card to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Player. */
export class Player implements IPlayer {

    /**
     * Constructs a new Player.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayer);

    /** Player id. */
    public id: string;

    /** Player userId. */
    public userId: string;

    /** Player deckSize. */
    public deckSize: number;

    /** Player energy. */
    public energy: number;

    /** Player maxEnergy. */
    public maxEnergy: number;

    /** Player hand. */
    public hand: ICard[];

    /** Player play. */
    public play: ICard[];

    /** Player scrapyard. */
    public scrapyard: ICard[];

    /** Player void. */
    public void: ICard[];

    /** Player knowledgePool. */
    public knowledgePool: IKnowledgeGroup[];

    /** Player reflect. */
    public reflect: number;

    /** Player shield. */
    public shield: number;

    /** Player handSize. */
    public handSize: number;

    /** Player health. */
    public health: number;

    /**
     * Creates a new Player instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Player instance
     */
    public static create(properties?: IPlayer): Player;

    /**
     * Encodes the specified Player message. Does not implicitly {@link Player.verify|verify} messages.
     * @param message Player message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Player message, length delimited. Does not implicitly {@link Player.verify|verify} messages.
     * @param message Player message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Player message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Player;

    /**
     * Decodes a Player message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Player;

    /**
     * Verifies a Player message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Player message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Player
     */
    public static fromObject(object: { [k: string]: any }): Player;

    /**
     * Creates a plain object from a Player message. Also converts values to other types if specified.
     * @param message Player
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Player to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a GameState. */
export class GameState implements IGameState {

    /**
     * Constructs a new GameState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState);

    /** GameState id. */
    public id: string;

    /** GameState player. */
    public player?: (IPlayer|null);

    /** GameState opponent. */
    public opponent?: (IPlayer|null);

    /** GameState turnPlayer. */
    public turnPlayer: string;

    /** GameState activePlayer. */
    public activePlayer: string;

    /** GameState stack. */
    public stack: ICard[];

    /** GameState canPlay. */
    public canPlay: string[];

    /** GameState canActivate. */
    public canActivate: string[];

    /** GameState canStudy. */
    public canStudy: string[];

    /** GameState attackers. */
    public attackers: string[];

    /** GameState blockers. */
    public blockers: string[];

    /** GameState phase. */
    public phase: Phase;

    /**
     * Creates a new GameState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState instance
     */
    public static create(properties?: IGameState): GameState;

    /**
     * Encodes the specified GameState message. Does not implicitly {@link GameState.verify|verify} messages.
     * @param message GameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameState message, length delimited. Does not implicitly {@link GameState.verify|verify} messages.
     * @param message GameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState;

    /**
     * Decodes a GameState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameState;

    /**
     * Verifies a GameState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameState
     */
    public static fromObject(object: { [k: string]: any }): GameState;

    /**
     * Creates a plain object from a GameState message. Also converts values to other types if specified.
     * @param message GameState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a JoinQueue. */
export class JoinQueue implements IJoinQueue {

    /**
     * Constructs a new JoinQueue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinQueue);

    /** JoinQueue decklist. */
    public decklist: string[];

    /**
     * Creates a new JoinQueue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinQueue instance
     */
    public static create(properties?: IJoinQueue): JoinQueue;

    /**
     * Encodes the specified JoinQueue message. Does not implicitly {@link JoinQueue.verify|verify} messages.
     * @param message JoinQueue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinQueue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JoinQueue message, length delimited. Does not implicitly {@link JoinQueue.verify|verify} messages.
     * @param message JoinQueue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinQueue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JoinQueue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinQueue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinQueue;

    /**
     * Decodes a JoinQueue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinQueue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinQueue;

    /**
     * Verifies a JoinQueue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JoinQueue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JoinQueue
     */
    public static fromObject(object: { [k: string]: any }): JoinQueue;

    /**
     * Creates a plain object from a JoinQueue message. Also converts values to other types if specified.
     * @param message JoinQueue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JoinQueue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JoinQueue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a LoadGame. */
export class LoadGame implements ILoadGame {

    /**
     * Constructs a new LoadGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoadGame);

    /** LoadGame filename. */
    public filename: string;

    /**
     * Creates a new LoadGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoadGame instance
     */
    public static create(properties?: ILoadGame): LoadGame;

    /**
     * Encodes the specified LoadGame message. Does not implicitly {@link LoadGame.verify|verify} messages.
     * @param message LoadGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoadGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoadGame message, length delimited. Does not implicitly {@link LoadGame.verify|verify} messages.
     * @param message LoadGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoadGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoadGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoadGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoadGame;

    /**
     * Decodes a LoadGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoadGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoadGame;

    /**
     * Verifies a LoadGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoadGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoadGame
     */
    public static fromObject(object: { [k: string]: any }): LoadGame;

    /**
     * Creates a plain object from a LoadGame message. Also converts values to other types if specified.
     * @param message LoadGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoadGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoadGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a RegisterGameConnection. */
export class RegisterGameConnection implements IRegisterGameConnection {

    /**
     * Constructs a new RegisterGameConnection.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegisterGameConnection);

    /** RegisterGameConnection gameID. */
    public gameID: string;

    /**
     * Creates a new RegisterGameConnection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegisterGameConnection instance
     */
    public static create(properties?: IRegisterGameConnection): RegisterGameConnection;

    /**
     * Encodes the specified RegisterGameConnection message. Does not implicitly {@link RegisterGameConnection.verify|verify} messages.
     * @param message RegisterGameConnection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegisterGameConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RegisterGameConnection message, length delimited. Does not implicitly {@link RegisterGameConnection.verify|verify} messages.
     * @param message RegisterGameConnection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRegisterGameConnection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegisterGameConnection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegisterGameConnection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegisterGameConnection;

    /**
     * Decodes a RegisterGameConnection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegisterGameConnection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RegisterGameConnection;

    /**
     * Verifies a RegisterGameConnection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RegisterGameConnection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegisterGameConnection
     */
    public static fromObject(object: { [k: string]: any }): RegisterGameConnection;

    /**
     * Creates a plain object from a RegisterGameConnection message. Also converts values to other types if specified.
     * @param message RegisterGameConnection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RegisterGameConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RegisterGameConnection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ClientMessage. */
export class ClientMessage implements IClientMessage {

    /**
     * Constructs a new ClientMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientMessage);

    /** ClientMessage joinQueue. */
    public joinQueue?: (IJoinQueue|null);

    /** ClientMessage registerGameConnection. */
    public registerGameConnection?: (IRegisterGameConnection|null);

    /** ClientMessage loadGame. */
    public loadGame?: (ILoadGame|null);

    /** ClientMessage payload. */
    public payload?: ("joinQueue"|"registerGameConnection"|"loadGame");

    /**
     * Creates a new ClientMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientMessage instance
     */
    public static create(properties?: IClientMessage): ClientMessage;

    /**
     * Encodes the specified ClientMessage message. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @param message ClientMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @param message ClientMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientMessage;

    /**
     * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientMessage;

    /**
     * Verifies a ClientMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientMessage
     */
    public static fromObject(object: { [k: string]: any }): ClientMessage;

    /**
     * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
     * @param message ClientMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an UpdateGameState. */
export class UpdateGameState implements IUpdateGameState {

    /**
     * Constructs a new UpdateGameState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateGameState);

    /** UpdateGameState game. */
    public game?: (IGameState|null);

    /**
     * Creates a new UpdateGameState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateGameState instance
     */
    public static create(properties?: IUpdateGameState): UpdateGameState;

    /**
     * Encodes the specified UpdateGameState message. Does not implicitly {@link UpdateGameState.verify|verify} messages.
     * @param message UpdateGameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateGameState message, length delimited. Does not implicitly {@link UpdateGameState.verify|verify} messages.
     * @param message UpdateGameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateGameState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateGameState;

    /**
     * Decodes an UpdateGameState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateGameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateGameState;

    /**
     * Verifies an UpdateGameState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateGameState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateGameState
     */
    public static fromObject(object: { [k: string]: any }): UpdateGameState;

    /**
     * Creates a plain object from an UpdateGameState message. Also converts values to other types if specified.
     * @param message UpdateGameState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateGameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateGameState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a GameEnd. */
export class GameEnd implements IGameEnd {

    /**
     * Constructs a new GameEnd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameEnd);

    /** GameEnd game. */
    public game?: (IGameState|null);

    /** GameEnd win. */
    public win: boolean;

    /**
     * Creates a new GameEnd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameEnd instance
     */
    public static create(properties?: IGameEnd): GameEnd;

    /**
     * Encodes the specified GameEnd message. Does not implicitly {@link GameEnd.verify|verify} messages.
     * @param message GameEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameEnd message, length delimited. Does not implicitly {@link GameEnd.verify|verify} messages.
     * @param message GameEnd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameEnd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameEnd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameEnd;

    /**
     * Decodes a GameEnd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameEnd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameEnd;

    /**
     * Verifies a GameEnd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameEnd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameEnd
     */
    public static fromObject(object: { [k: string]: any }): GameEnd;

    /**
     * Creates a plain object from a GameEnd message. Also converts values to other types if specified.
     * @param message GameEnd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameEnd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an OrderCards. */
export class OrderCards implements IOrderCards {

    /**
     * Constructs a new OrderCards.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderCards);

    /** OrderCards game. */
    public game?: (IGameState|null);

    /** OrderCards cardsToOrder. */
    public cardsToOrder: ICard[];

    /**
     * Creates a new OrderCards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderCards instance
     */
    public static create(properties?: IOrderCards): OrderCards;

    /**
     * Encodes the specified OrderCards message. Does not implicitly {@link OrderCards.verify|verify} messages.
     * @param message OrderCards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderCards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderCards message, length delimited. Does not implicitly {@link OrderCards.verify|verify} messages.
     * @param message OrderCards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderCards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderCards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderCards;

    /**
     * Decodes an OrderCards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderCards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderCards;

    /**
     * Verifies an OrderCards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderCards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderCards
     */
    public static fromObject(object: { [k: string]: any }): OrderCards;

    /**
     * Creates a plain object from an OrderCards message. Also converts values to other types if specified.
     * @param message OrderCards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderCards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SelectFrom. */
export class SelectFrom implements ISelectFrom {

    /**
     * Constructs a new SelectFrom.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectFrom);

    /** SelectFrom messageType. */
    public messageType: SelectFromType;

    /** SelectFrom game. */
    public game?: (IGameState|null);

    /** SelectFrom selectionCount. */
    public selectionCount: number;

    /** SelectFrom candidates. */
    public candidates: ICard[];

    /** SelectFrom selectable. */
    public selectable: string[];

    /** SelectFrom upTo. */
    public upTo: boolean;

    /**
     * Creates a new SelectFrom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectFrom instance
     */
    public static create(properties?: ISelectFrom): SelectFrom;

    /**
     * Encodes the specified SelectFrom message. Does not implicitly {@link SelectFrom.verify|verify} messages.
     * @param message SelectFrom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectFrom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectFrom message, length delimited. Does not implicitly {@link SelectFrom.verify|verify} messages.
     * @param message SelectFrom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectFrom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectFrom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectFrom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectFrom;

    /**
     * Decodes a SelectFrom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectFrom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectFrom;

    /**
     * Verifies a SelectFrom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectFrom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectFrom
     */
    public static fromObject(object: { [k: string]: any }): SelectFrom;

    /**
     * Creates a plain object from a SelectFrom message. Also converts values to other types if specified.
     * @param message SelectFrom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectFrom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectFrom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SelectXValue. */
export class SelectXValue implements ISelectXValue {

    /**
     * Constructs a new SelectXValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectXValue);

    /** SelectXValue game. */
    public game?: (IGameState|null);

    /** SelectXValue maxXValue. */
    public maxXValue: number;

    /**
     * Creates a new SelectXValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectXValue instance
     */
    public static create(properties?: ISelectXValue): SelectXValue;

    /**
     * Encodes the specified SelectXValue message. Does not implicitly {@link SelectXValue.verify|verify} messages.
     * @param message SelectXValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectXValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectXValue message, length delimited. Does not implicitly {@link SelectXValue.verify|verify} messages.
     * @param message SelectXValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectXValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectXValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectXValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectXValue;

    /**
     * Decodes a SelectXValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectXValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectXValue;

    /**
     * Verifies a SelectXValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectXValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectXValue
     */
    public static fromObject(object: { [k: string]: any }): SelectXValue;

    /**
     * Creates a plain object from a SelectXValue message. Also converts values to other types if specified.
     * @param message SelectXValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectXValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectXValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SelectAttackers. */
export class SelectAttackers implements ISelectAttackers {

    /**
     * Constructs a new SelectAttackers.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectAttackers);

    /** SelectAttackers game. */
    public game?: (IGameState|null);

    /** SelectAttackers possibleAttackers. */
    public possibleAttackers: IAttacker[];

    /**
     * Creates a new SelectAttackers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectAttackers instance
     */
    public static create(properties?: ISelectAttackers): SelectAttackers;

    /**
     * Encodes the specified SelectAttackers message. Does not implicitly {@link SelectAttackers.verify|verify} messages.
     * @param message SelectAttackers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectAttackers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectAttackers message, length delimited. Does not implicitly {@link SelectAttackers.verify|verify} messages.
     * @param message SelectAttackers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectAttackers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectAttackers message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectAttackers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectAttackers;

    /**
     * Decodes a SelectAttackers message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectAttackers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectAttackers;

    /**
     * Verifies a SelectAttackers message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectAttackers message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectAttackers
     */
    public static fromObject(object: { [k: string]: any }): SelectAttackers;

    /**
     * Creates a plain object from a SelectAttackers message. Also converts values to other types if specified.
     * @param message SelectAttackers
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectAttackers, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectAttackers to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a SelectBlockers. */
export class SelectBlockers implements ISelectBlockers {

    /**
     * Constructs a new SelectBlockers.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectBlockers);

    /** SelectBlockers game. */
    public game?: (IGameState|null);

    /** SelectBlockers possibleBlockers. */
    public possibleBlockers: IBlocker[];

    /**
     * Creates a new SelectBlockers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectBlockers instance
     */
    public static create(properties?: ISelectBlockers): SelectBlockers;

    /**
     * Encodes the specified SelectBlockers message. Does not implicitly {@link SelectBlockers.verify|verify} messages.
     * @param message SelectBlockers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectBlockers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectBlockers message, length delimited. Does not implicitly {@link SelectBlockers.verify|verify} messages.
     * @param message SelectBlockers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectBlockers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectBlockers message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectBlockers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectBlockers;

    /**
     * Decodes a SelectBlockers message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectBlockers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectBlockers;

    /**
     * Verifies a SelectBlockers message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectBlockers message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectBlockers
     */
    public static fromObject(object: { [k: string]: any }): SelectBlockers;

    /**
     * Creates a plain object from a SelectBlockers message. Also converts values to other types if specified.
     * @param message SelectBlockers
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectBlockers, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectBlockers to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ServerGameMessage. */
export class ServerGameMessage implements IServerGameMessage {

    /**
     * Constructs a new ServerGameMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerGameMessage);

    /** ServerGameMessage updateGameState. */
    public updateGameState?: (IUpdateGameState|null);

    /** ServerGameMessage gameEnd. */
    public gameEnd?: (IGameEnd|null);

    /** ServerGameMessage orderCards. */
    public orderCards?: (IOrderCards|null);

    /** ServerGameMessage selectFrom. */
    public selectFrom?: (ISelectFrom|null);

    /** ServerGameMessage selectXValue. */
    public selectXValue?: (ISelectXValue|null);

    /** ServerGameMessage selectAttackers. */
    public selectAttackers?: (ISelectAttackers|null);

    /** ServerGameMessage selectBlockers. */
    public selectBlockers?: (ISelectBlockers|null);

    /** ServerGameMessage payload. */
    public payload?: ("updateGameState"|"gameEnd"|"orderCards"|"selectFrom"|"selectXValue"|"selectAttackers"|"selectBlockers");

    /**
     * Creates a new ServerGameMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerGameMessage instance
     */
    public static create(properties?: IServerGameMessage): ServerGameMessage;

    /**
     * Encodes the specified ServerGameMessage message. Does not implicitly {@link ServerGameMessage.verify|verify} messages.
     * @param message ServerGameMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerGameMessage message, length delimited. Does not implicitly {@link ServerGameMessage.verify|verify} messages.
     * @param message ServerGameMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerGameMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerGameMessage;

    /**
     * Decodes a ServerGameMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerGameMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerGameMessage;

    /**
     * Verifies a ServerGameMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerGameMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerGameMessage
     */
    public static fromObject(object: { [k: string]: any }): ServerGameMessage;

    /**
     * Creates a plain object from a ServerGameMessage message. Also converts values to other types if specified.
     * @param message ServerGameMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerGameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerGameMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Messages from server to client. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse gameId. */
    public gameId: string;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginResponse;

    /**
     * Verifies a LoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginResponse;

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @param message LoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a NewGame. */
export class NewGame implements INewGame {

    /**
     * Constructs a new NewGame.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewGame);

    /** NewGame game. */
    public game?: (IGameState|null);

    /**
     * Creates a new NewGame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewGame instance
     */
    public static create(properties?: INewGame): NewGame;

    /**
     * Encodes the specified NewGame message. Does not implicitly {@link NewGame.verify|verify} messages.
     * @param message NewGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewGame message, length delimited. Does not implicitly {@link NewGame.verify|verify} messages.
     * @param message NewGame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewGame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewGame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewGame;

    /**
     * Decodes a NewGame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewGame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewGame;

    /**
     * Verifies a NewGame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewGame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewGame
     */
    public static fromObject(object: { [k: string]: any }): NewGame;

    /**
     * Creates a plain object from a NewGame message. Also converts values to other types if specified.
     * @param message NewGame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewGame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ServerMessage. */
export class ServerMessage implements IServerMessage {

    /**
     * Constructs a new ServerMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerMessage);

    /** ServerMessage loginResponse. */
    public loginResponse?: (ILoginResponse|null);

    /** ServerMessage newGame. */
    public newGame?: (INewGame|null);

    /** ServerMessage payload. */
    public payload?: ("loginResponse"|"newGame");

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerMessage instance
     */
    public static create(properties?: IServerMessage): ServerMessage;

    /**
     * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @param message ServerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @param message ServerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerMessage;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerMessage;

    /**
     * Verifies a ServerMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerMessage
     */
    public static fromObject(object: { [k: string]: any }): ServerMessage;

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @param message ServerMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}