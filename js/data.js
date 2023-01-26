/* data file to update profile image */
let profileImage = document.getElementById('profile_image');
let profImg = document.createElement('img');
profImg.src = 'assets/images/image-sadie-profile-mobile.webp';
profImg.alt = 'profile-image';
profImg.className = 'profile';
profileImage.appendChild(profImg);

/* dynamically render rings svg */
let rings = {
  cls: 'rings',
  type: 'g',
  width: 530,
  height: 129,
  shape: 'ellipse',
  shapeNum: 5,
  cx: 265,
  cy: 40,
  rx: 264.5,
  ry: 39.5,
};

function renderRingsSVG(svg) {
  /**
   * Creates svg that can be styled with css.
   * @param {object} svg that should include
   * @param {string} cls
   * @param {string} type
   * @param {number} width @param {number} height
   * @param {string} shape @param {number} shapeNum
   * @param {number} cx @param {number} cy @param {number} rx @param {number} ry
   * @return {svg} The result is an svg element.
   */
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.setAttribute('width', svg.width);
  iconSvg.setAttribute('height', svg.height);
  iconSvg.classList.add(svg.cls);
  const iconType = document.createElementNS(
    'http://www.w3.org/2000/svg',
    svg.type
  );

  iconType.setAttribute('fill', 'none');
  iconType.setAttribute('fill-rule', 'evenodd');
  iconType.setAttribute('stroke', '#FFF');
  iconSvg.appendChild(iconType);

  for (let i = 0; i < svg.shapeNum; i++) {
    let iconShape = document.createElementNS(
      'http://www.w3.org/2000/svg',
      svg.shape
    );
    iconShape.setAttribute('cx', svg.cx);
    iconShape.setAttribute('cy', svg.cy + 12 * i);
    iconShape.setAttribute('rx', svg.rx);
    iconShape.setAttribute('ry', svg.ry);
    iconType.appendChild(iconShape);
  }
  return iconSvg;
}

function appendWithCircleSVG(elementToAppend) {
  /**
   * appends an HTML element with an svg.
   * @param {HTMLelement} elementToAppend
   * where <svg></svg>will be inserted
   */
  let ringsSVG = renderRingsSVG(rings);
  elementToAppend.appendChild(ringsSVG);
}
appendWithCircleSVG(addRing);
appendWithCircleSVG(addRing2);
appendWithCircleSVG(addRing3);

/* dynamically render circle svg */
let circle = {
  cls: 'circle',
  type: 'circle',
  width: 129,
  height: 129,
  cx: 830.5,
  cy: 585.5,
  r: 64,
  transform: 'translate(-766 -521)',
};

function renderCircle(svg) {
  /**
   * So unecessary, but i'm committed to the bit
   * Creates svg that can be styled with css.
   * @param {object} svg that should include
   * @param {string} cls
   * @param {string} type
   * @param {number} width @param {number} height
   * @param {string} shape @param {number} shapeNum
   * @param {number} cx @param {number} cy @param {number} r
   * @param {string} transform
   * @return {svg} The result is an svg element.
   */
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  iconSvg.classList.add(svg.cls);
  iconSvg.setAttribute('width', svg.width);
  iconSvg.setAttribute('height', svg.height);
  const iconType = document.createElementNS(
    'http://www.w3.org/2000/svg',
    svg.type
  );
  iconType.setAttribute('cx', svg.cx);
  iconType.setAttribute('cy', svg.cy);
  iconType.setAttribute('r', svg.r);
  iconType.setAttribute('fill', 'none');
  iconType.setAttribute('stroke', '#FFF');
  iconType.setAttribute('transform', svg.transform);
  iconSvg.appendChild(iconType);
  return iconSvg;
}

let circleSVG = renderCircle(circle);
let addCirc = document.getElementById('addCircle');
addCirc.appendChild(circleSVG);
