package uz.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.todo.entity.ProjectTask;

@Repository
public interface ProjectTaskRepository extends JpaRepository<ProjectTask, Long> {

    ProjectTask getById(Long id);

}
