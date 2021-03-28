<!--
 * @Author: rowG
 * @Date: 2021-03-28 14:05:26
 * @LastEditTime: 2021-03-28 14:06:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \undefinedt:\github_rowG\rockjaylee.github.io\README.md
-->

# Git

## Git基本概念与配置

```git config --global user.name "username"``` 配置全局用户名  
```git config user.name``` 查看所配置的全局用户名/指定的全局配置项  
```git config --list --global``` 查看所有全局配置  

## Git基本操作

.gitignore 配置白名单 忽略名单 !rep中已有的文件被修改时无法忽略？  
```git init``` 新建/初始化一个git仓库  
```git status``` ``` git status -s``` 查看git状态  
```git add``` 将文件添加到暂存区  
```git add .``` 将所有新增和修改过的文件添加到暂存区  
```git commit -m "message"``` 将暂存区文件提交  
```git checkout -- ``` 撤销对文件的修改/仓库覆盖工作区  
```git checkout .``` 撤销对多个文件的修改 所有撤销的内容将丢失/有风险  
```git reset HEAD ``` 将暂存区文件退回add之前的状态（已修改或未跟踪）  
```git reset HEAD .``` 将所有暂存区文件退回add之前的状态  
```git commit -a -m "message"``` 跳过暂存区 直接将所有已跟踪文件提交  
```git rm``` 从git仓库和工作区同时移除文件  
```git rm -f ``` 强制删除  
```git rm --cached``` 从仓库中移除 但保留工作区中文件 
```git log``` 查看提交记录  
```git log -2 --pretty=oneline``` 最近两条 一行显示  
```git log -2 --pretty=format:"%h | %an | %ar | %s"``` 自定义格式  
```git reset --hard <commitID>``` 回退到指定版本  
```git reflog --pretty=oneline``` 回退后 仍查看所有log   
