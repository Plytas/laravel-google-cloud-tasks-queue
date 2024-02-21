<?php

declare(strict_types=1);

return [
    // The URI of the endpoint that will handle the task
    'uri' => env('STACKKIT_CLOUD_TASKS_URI', 'handle-task'),

    // If the application only dispatches jobs
    'disable_task_handler' => env('STACKKIT_CLOUD_TASKS_DISABLE_TASK_HANDLER', false),

    'dashboard' => [
        'enabled' => env('STACKKIT_CLOUD_TASKS_DASHBOARD_ENABLED', false),
        'password' => env('STACKKIT_CLOUD_TASKS_DASHBOARD_PASSWORD', 'MyPassword1!'),
    ],
];
