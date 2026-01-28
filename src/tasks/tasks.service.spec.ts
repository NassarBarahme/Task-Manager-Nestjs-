import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { TaskStatus } from './task.status.enum';
import { User } from '../auth/user.entity';

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: jest.Mocked<TasksRepository>;

  const mockUser = {
    userName: 'Ariel',
    id: 'someId',
    password: 'p',
    tasks: [],
  } as User;

  const mockTasksRepository = {
    getTasks: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: TasksRepository,
          useValue: mockTasksRepository, // استخدم useValue بدل useFactory
        },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTaskById', () => {
    it('returns a task', async () => {
      const mockTask = {
        title: 'T',
        description: 'D',
        id: '1',
        status: TaskStatus.OPEN,
        user: mockUser,
      };

      tasksRepository.findOne.mockResolvedValue(mockTask);
      const result = await tasksService.getTaskById('1', mockUser);
      expect(result).toEqual(mockTask);
    });

    it('throws NotFoundException when task not found', async () => {
      tasksRepository.findOne.mockResolvedValue(null);

      await expect(
        tasksService.getTaskById('nonExistentId', mockUser),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
