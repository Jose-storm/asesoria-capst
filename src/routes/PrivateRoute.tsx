// import { Navigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import type { ReactNode } from "react";

// interface PrivateRouteProps {
//   children: ReactNode;
// }

// const PrivateRoute = ({ children }: PrivateRouteProps) => {
//   const { token, isAdmin, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white transition-all duration-300">
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-sm text-gray-600 animate-pulse">Verificando credenciales...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!token || !isAdmin) {
//     return <Navigate to="/login" />;
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;

/* Modificación 29/07/2025-------------------------------------------------------------- */

import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  allowedRoles?: string[]; // ["admin"], ["admin", "admin_secundario"], etc.
}

const PrivateRoute = ({ children, allowedRoles = ["admin"] }: PrivateRouteProps) => {
  const { token, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white transition-all duration-300">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-600 animate-pulse">Verificando credenciales...</p>
        </div>
      </div>
    );
  }

  if (!token || !role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
