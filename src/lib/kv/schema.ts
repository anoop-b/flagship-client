export interface Projects {
	id: number;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	deprecated: boolean;
	archived: boolean;
	flags: Flag[];
}

export interface Flag {
	id: number;
	name: string;
	kind: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	deprecated: boolean;
	archived: boolean;
	project_id: number;
	configs: Config[];
}

export interface Config {
	id: number;
	environment_id: number;
	flag_id: number;
	value: boolean;
	createdAt: Date;
	updatedAt: Date;
	environment: Environment;
}

export interface Environment {
	id: number;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	project_id: number;
}
