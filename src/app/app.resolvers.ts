import { inject } from '@angular/core';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';
import { forkJoin } from 'rxjs';

export const initialDataResolver = () =>
{

    const navigationService = inject(NavigationService);

    const quickChatService = inject(QuickChatService);


    // Fork join multiple API endpoint calls to wait all of them to finish
    return forkJoin([
        navigationService.get(),
        quickChatService.getChats(),

    ]);
};
