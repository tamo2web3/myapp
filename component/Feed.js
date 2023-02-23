import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "../routes";

const Feed = (props) => {
  return (
    <div class="event">
      <div class="label">
        <Link route={props.links}>
          <Icon name={props.icon} color={props.color} />
        </Link>
      </div>
      <div class="content">
        <div class="date">
          {props.dates}
        </div>
        <div class="summary">
           {props.messages}
           <u>
           <Link route={props.links}>
            {props.linkword}
           </Link>
           </u>
        </div>
      </div>
    </div>
  );
}

export default Feed;
