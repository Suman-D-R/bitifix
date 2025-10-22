import { useRive } from '@rive-app/react-canvas';

function RiveComponent({ src }: { src: string }) {
  const { RiveComponent } = useRive({
    src: `/rive/${src}.riv`,
    stateMachines: 'State Machine 1',
    isTouchScrollEnabled: true,
    autoplay: true,
  });
  return <RiveComponent />;
}

export default RiveComponent;
