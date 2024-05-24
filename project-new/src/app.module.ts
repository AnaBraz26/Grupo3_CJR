import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProfessorsModule } from './professors/professors.module';
import { CommentsModule } from './comments/comments.module';
import { DisciplineModule } from './discipline/discipline.module';

@Module({
  imports: [UsersModule, ReviewsModule, ProfessorsModule, CommentsModule, DisciplineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
