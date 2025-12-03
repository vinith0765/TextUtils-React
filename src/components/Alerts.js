import React from 'react'

function Alerts({alert}) {
    const Capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capatalize(alert.type)}</strong> : {alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alerts
