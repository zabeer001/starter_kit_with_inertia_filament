<?php

namespace App\Providers;

use Filament\Facades\Filament;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class FilamentServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Restrict Filament admin panel to admin users only
        Filament::serving(function () {
            $user = Auth::user();

            if (! $user || $user->role !== 'admin') {
                abort(403); // deny access
            }
        });
    }
}
