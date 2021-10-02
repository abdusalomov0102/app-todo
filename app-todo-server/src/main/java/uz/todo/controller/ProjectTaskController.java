package uz.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import uz.todo.entity.ProjectTask;
import uz.todo.service.ProjectTaskService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/board")
public class ProjectTaskController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@Valid @RequestBody ProjectTask projectTask, BindingResult result) {

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);

        return new ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);
    }

    @GetMapping
    public Iterable<ProjectTask> getAllPTs() {
        return projectTaskService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPTById(@PathVariable Long id) {
        ProjectTask projectTask = projectTaskService.findById(id);
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable Long id) {
        projectTaskService.delete(id);
        return new ResponseEntity<String>("Project Task deleted!!!", HttpStatus.OK);
    }

}
