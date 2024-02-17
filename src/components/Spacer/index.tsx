interface SpacerProps {
  height: number;
}

export const Spacer = ({ height }: SpacerProps) => {

  return (
    <div className="spacer" style={{ height: `${height}px` }}></div>
  )
}
