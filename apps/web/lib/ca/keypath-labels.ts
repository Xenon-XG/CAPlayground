const labels: Record<string, string> = {
  position: '位置',
  'position.x': '位置 X',
  'position.y': '位置 Y',
  'transform.translation.x': '平移 X',
  'transform.translation.y': '平移 Y',
  'transform.rotation.x': '旋转 X',
  'transform.rotation.y': '旋转 Y',
  'transform.rotation.z': '旋转 Z',
  'anchorPoint.x': '锚点 X',
  'anchorPoint.y': '锚点 Y',
  opacity: '不透明度',
  bounds: '边界尺寸',
  backgroundColor: '背景颜色',
  colors: '渐变颜色',
};

export function keyPathLabel(keyPath: string): string {
  return labels[keyPath] ?? keyPath;
}
