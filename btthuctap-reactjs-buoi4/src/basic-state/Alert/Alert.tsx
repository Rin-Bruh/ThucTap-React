import './Alert.css'; 

interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

function Alert({ type, message }: AlertProps) {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-icon">{type === 'success' && '✔️'} {type === 'error' && '❌'} {type === 'warning' && '⚠️'} {type === 'info' && 'ℹ️'}</span>
      <strong className="alert-title">{type.charAt(0).toUpperCase() + type.slice(1)}!</strong>
      <span className="alert-message"> {message}</span>
    </div>
  );
}

export default Alert;

