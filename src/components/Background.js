import React from 'react';
import ScriptTag from 'react-script-tag';

function Background() {
  // JS
  const gradient = new Gradient();
  gradient.initGradient('#canvas');

  const Demo = (props) => (
    <ScriptTag
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"
    />
  );

  //RETURN
  return (
    <div>
      <div class="background--custom">
        <canvas id="canvas" />
      </div>
    </div>
  );
}

export default Background;
