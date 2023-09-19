CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`accountId` text NOT NULL,
	`displayName` text NOT NULL,
	`introduction` text,
	`isDeactivated` integer DEFAULT false,
	`avatarUri` text NOT NULL,
	`profileId` text NOT NULL,
	`provider` text NOT NULL,
	`createdAt` integer NOT NULL,
	`isProfileRegistered` integer DEFAULT false
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_accountId_unique` ON `users` (`accountId`);