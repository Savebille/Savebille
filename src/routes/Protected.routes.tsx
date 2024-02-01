import React, { PropsWithChildren } from 'react';
import {
	Navigate,
	Outlet,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

type Props = {
	redirectPath: string;
};

const ProtectedRoutes: React.FC<PropsWithChildren<Props>> = ({
	redirectPath,
}) => {

  const isAuthenticated = true;
  
	if (!isAuthenticated) {
		return (
			<Navigate
				to={redirectPath}
				replace
			/>
		);
	}

	return (
		<MainLayout>
			<Outlet />
		</MainLayout>
	);
};

export default React.memo(ProtectedRoutes);
